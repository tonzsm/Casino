<?php
	require_once('utils.php');

	if (!isUserHasAccess(10 /* Rooms */)) {
		header('Location: 403.php');
		die();
	}

	if (!isset($_POST['id'])) {
		header('Location: rooms.php');
		die();
	}

	$id = intval($_POST['id']);
?>

<!DOCTYPE html>
<html>
	<head>
		<title>Get Money from Room</title>
		<?php require_once('head.php'); ?>
	</head>
	<body>
		<?php require_once('header.php'); ?>

		<div class="admin-content panel panel-default">
			<div class="panel-heading">Get Money from Room "<?php echo getRoomTitle($id); ?>"</div>

			<table class="table">
				<tbody>
					<?php
						$db = new PdoDb();
						$req = $db->prepare('SELECT `money` FROM `rooms` WHERE `id`=:id AND `deleted`=0 ORDER BY `id`;');
						$req->bindParam(':id', $id, PDO::PARAM_INT);
						$req->execute();

						while (list($money) = $req->fetch(PDO::FETCH_NUM)) {
							?>
								<tr>
									<td>Current</td>
									<td id="currentmoney"><?php echo $money; ?></td>
								</tr>
								<tr>
									<td>Get</td>
									<td>
										<input type="number" value="1000" id="money">
										<input id="submit" type="button" value="Get">
										<input id="submit2" type="button" value="Get All">
									</td>
								</tr>
							<?php

							break;
						}
					?>
				</tbody>
			</table>
		</div>

		<script>
			$('#submit').click(function() {
				var money = parseInt($('#money').val());
				var current = parseInt($('#currentmoney').text());

				if (money > current) {
					alertify.error('This room has not that money count');
				} else {
					(function(money) {
						$.get('dogetmoneyfromroom.php?id=<?php echo $id; ?>&money=' + money, function(result) {
							if (result.trim() != 'true') {
								alertify.error('Some error happens');
							} else {
								alertify.success('Money successfully added');
								$('#currentmoney').text(parseInt($('#currentmoney').text()) - money);
							}
						});
					})(money);
				}
			});

			$('#submit2').click(function() {
				var money = parseInt($('#currentmoney').text());

				(function(money) {
					$.get('dogetmoneyfromroom.php?id=<?php echo $id; ?>&money=' + money, function(result) {
						if (result.trim() != 'true') {
							alertify.error('Some error happens');
						} else {
							alertify.success('Money successfully added');
							$('#currentmoney').text(parseInt($('#currentmoney').text()) - money);
						}
					});
				})(money);
			});
		</script>
	</body>
</html>