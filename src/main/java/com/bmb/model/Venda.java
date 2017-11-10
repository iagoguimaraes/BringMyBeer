
package com.bmb.model;

import java.util.ArrayList;
import java.sql.Date;

public class Venda {
    
    private int idVenda;
    private Date data;
    private boolean confirmado;
    private boolean cancelado;
    private ArrayList<ItemVenda> items;
    private FormaPagamento formaPagamento;
    private Cliente cliente;
    private Endereco endereco;
    
    public Venda() {
    }

    public Venda(int idVenda, Date data, boolean confirmado, boolean cancelado, ArrayList<ItemVenda> items, FormaPagamento formaPagamento, Cliente cliente, Endereco endereco) {
        this.idVenda = idVenda;
        this.data = data;
        this.confirmado = confirmado;
        this.cancelado = cancelado;
        this.items = items;
        this.formaPagamento = formaPagamento;
        this.cliente = cliente;
        this.endereco = endereco;
    }
       
    public int getIdVenda() {
        return idVenda;
    }

    public void setIdVenda(int idVenda) {
        this.idVenda = idVenda;
    }

    public Date getData() {
        return data;
    }

    public void setData(Date data) {
        this.data = new java.sql.Date(data.getTime());
    }

    public boolean isConfirmado() {
        return confirmado;
    }

    public void setConfirmado(boolean confirmado) {
        this.confirmado = confirmado;
    }

    public boolean isCancelado() {
        return cancelado;
    }

    public void setCancelado(boolean cancelado) {
        this.cancelado = cancelado;
    }

    public ArrayList<ItemVenda> getItems() {
        return items;
    }

    public void setItems(ArrayList<ItemVenda> items) {
        this.items = items;
    }

    public FormaPagamento getFormaPagamento() {
        return formaPagamento;
    }

    public void setFormaPagamento(FormaPagamento formaPagamento) {
        this.formaPagamento = formaPagamento;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public Endereco getEndereco() {
        return endereco;
    }

    public void setEndereco(Endereco endereco) {
        this.endereco = endereco;
    }
}
