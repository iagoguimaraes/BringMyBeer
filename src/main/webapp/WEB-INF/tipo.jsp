<!DOCTYPE html>
<html>
<head>
	<title>TIA DO PELÉ</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

	<!-- jQuery library -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

	<!-- Latest compiled JavaScript -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<meta charset="utf-8">
</head>
<body>
	<div class="container">
		<div class="row">

			<div class="col-md-12">
				<button type="button" class="btn btn-info" data-toggle="modal" data-target="#ModalCadastrar">Cadastrar</button>
				<button type="button" class="btn btn-info" data-toggle="modal" data-target="#ModalAlterar">Alterar</button>
				<button type="button" class="btn btn-info" data-toggle="modal" data-target="#ModalDeletar">Deletar</button>
			</div>

			<div class="col-md-12">
				<table class="table table-hover">
					<tr>
						<th>ID</th>
						<th>Tipo</th> 
					</tr>
					<tr>
						<td>0</td>
						<td>Cerveja</td> 
					</tr>
					<tr>
						<td>1</td>
						<td>Vinho</td> 
					</tr>
				</table>
			</div>
		</div>

		<!-- Modal - Cadastro - BMB -->
		<div id="ModalCadastrar" class="modal fade" role="dialog">
			<div class="modal-dialog">
				<!-- Modal content-->
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
						<h4 class="modal-title">Cadastro de Tipo</h4>
					</div>
					<div class="modal-body">
						<form action="TipoCadastrar">
							<label for="tipo">Tipo:</label>
							<input type="text" class="form-control" name="tipo">
							<input type="hidden" name="country" value="0">						
						</form>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
						<button type="submit" class="btn btn-success">Cadastrar</button>			
					</div>
				</div>
			</div>
		</div>


		<!-- Modal - Alterar - BMB -->
		<div id="ModalAlterar" class="modal fade" role="dialog">
			<div class="modal-dialog">
				<!-- Modal content-->
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
						<h4 class="modal-title">Alterar Tipo</h4>
					</div>
					<div class="modal-body">
						<form action="TipoAlterar">
							<label for="tipo">Tipo:</label>
							<input type="" class="form-control" name="tipo">
							<input type="hidden" name="country" value="0">

							<button type="reset" class="btn btn-danger">Limpar</button>
							<button type="submit" class="btn btn-success">Salvar Alteração</button>	
						</form>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>
					</div>
				</div>
			</div>
		</div>

		<!-- Modal - Deletar - BMB -->
		<div id="ModalDeletar" class="modal fade" role="dialog">
			<div class="modal-dialog">
				<!-- Modal content-->
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
						<h4 class="modal-title">Cadastro de Tipo</h4>
					</div>
					<div class="modal-body">
						<h3>Deseja realmente excluir?</h3> 											
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
						<button type="submit" class="btn btn-success">Confirmar Exclusão</button>			
					</div>
				</div>
			</div>
		</div>



	</div>
</body>
</html>


