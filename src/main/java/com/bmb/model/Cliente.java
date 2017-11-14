
package com.bmb.model;

import java.util.ArrayList;
import java.sql.Date;

public class Cliente {
    private int idCliente;

    public Cliente() {
    }

    public Cliente(int idCliente, String nome, String sobrenome, Date dataNascimento, Date dataCadastro, String cpf, String email, String senha, String telefone, String celular, ArrayList<Endereco> enderecos) {
        this.idCliente = idCliente;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.dataNascimento = dataNascimento;
        this.dataCadastro = dataCadastro;
        this.cpf = cpf;
        this.email = email;
        this.senha = senha;
        this.telefone = telefone;
        this.celular = celular;
        this.enderecos = enderecos;
    }
       
    public int getIdCliente() {
        return idCliente;
    }

    public void setIdCliente(int idCliente) {
        this.idCliente = idCliente;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSobrenome() {
        return sobrenome;
    }

    public void setSobrenome(String sobrenome) {
        this.sobrenome = sobrenome;
    }

    public Date getDataNascimento() {
        return dataNascimento;
    }

    public void setDataNascimento(Date dataNascimento) {
        this.dataNascimento = new java.sql.Date(dataNascimento.getTime());
    }

    public Date getDataCadastro() {
        return dataCadastro;
    }

    public void setDataCadastro(Date dataCadastro) {
        this.dataCadastro = new java.sql.Date(dataCadastro.getTime());
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getCelular() {
        return celular;
    }

    public void setCelular(String celular) {
        this.celular = celular;
    }

    public ArrayList<Endereco> getEnderecos() {
        return enderecos;
    }

    public void setEnderecos(ArrayList<Endereco> enderecos) {
        this.enderecos = enderecos;
    }
    private String nome;
    private String sobrenome;
    private Date dataNascimento;
    private Date dataCadastro;
    private String cpf;
    private String email;
    private String senha;
    private String telefone;
    private String celular;  
    ArrayList<Endereco> enderecos;
}
