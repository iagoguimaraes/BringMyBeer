
package com.bmb.model;

import java.util.ArrayList;
import java.util.Date;

public class Cliente {
    private int idCliente;
    private String nome;
    private String sobrenome;
    private Date dataNascimento;
    private Date dataCadastro;
    private String cpf;
    private String email;
    private String senha;
    private long telefone;
    private long celular;  
    ArrayList<Endereco> enderecos;
}
