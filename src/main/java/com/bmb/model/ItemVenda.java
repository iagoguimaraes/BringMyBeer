
package com.bmb.model;

public class ItemVenda {
    private int idItemVenda;

    public ItemVenda() {
    }

    public ItemVenda(int idItemVenda, int quantidade, double preco, Produto produto) {
        this.idItemVenda = idItemVenda;
        this.quantidade = quantidade;
        this.preco = preco;
        this.produto = produto;
    }
      
    public int getIdItemVenda() {
        return idItemVenda;
    }

    public void setIdItemVenda(int idItemVenda) {
        this.idItemVenda = idItemVenda;
    }

    public int getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(int quantidade) {
        this.quantidade = quantidade;
    }

    public double getPreco() {
        return preco;
    }

    public void setPreco(double preco) {
        this.preco = preco;
    }

    public Produto getProduto() {
        return produto;
    }

    public void setProduto(Produto produto) {
        this.produto = produto;
    }
    private int quantidade;
    private double preco;
    private Produto produto;
}
