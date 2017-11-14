
package com.bmb.model;

import java.util.Date;

public class Produto {
    public int idProduto;

    public Produto() {
    }

    public Produto(int idProduto, String produto, double preco, String descricao, Date dataCadastro, boolean ativo, Tipo tipo, Marca marca, Foto foto) {
        this.idProduto = idProduto;
        this.produto = produto;
        this.preco = preco;
        this.descricao = descricao;
        this.dataCadastro = dataCadastro;
        this.ativo = ativo;
        this.tipo = tipo;
        this.marca = marca;
        this.foto = foto;
    }

    public int getIdProduto() {
        return idProduto;
    }

    public void setIdProduto(int idProduto) {
        this.idProduto = idProduto;
    }

    public String getProduto() {
        return produto;
    }

    public void setProduto(String produto) {
        this.produto = produto;
    }

    public double getPreco() {
        return preco;
    }

    public void setPreco(double preco) {
        this.preco = preco;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Date getDataCadastro() {
        return dataCadastro;
    }

    public void setDataCadastro(Date dataCadastro) {
        this.dataCadastro = dataCadastro;
    }

    public boolean isAtivo() {
        return ativo;
    }

    public void setAtivo(boolean ativo) {
        this.ativo = ativo;
    }

    public Tipo getTipo() {
        return tipo;
    }

    public void setTipo(Tipo tipo) {
        this.tipo = tipo;
    }

    public Marca getMarca() {
        return marca;
    }

    public void setMarca(Marca marca) {
        this.marca = marca;
    }

    public Foto getFoto() {
        return foto;
    }

    public void setFoto(Foto foto) {
        this.foto = foto;
    }
    private String produto;
    private double preco;
    private String descricao;
    private Date dataCadastro;
    private boolean ativo;
    private Tipo tipo;
    private Marca marca;
    private Foto foto;
}
