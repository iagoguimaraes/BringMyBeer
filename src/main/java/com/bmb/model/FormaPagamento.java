
package com.bmb.model;

public class FormaPagamento {
    private int idFormaPagamento;

    public FormaPagamento() {
    }

    public FormaPagamento(int idFormaPagamento, String formaPagamento) {
        this.idFormaPagamento = idFormaPagamento;
        this.formaPagamento = formaPagamento;
    }
    
    public int getIdFormaPagamento() {
        return idFormaPagamento;
    }

    public void setIdFormaPagamento(int idFormaPagamento) {
        this.idFormaPagamento = idFormaPagamento;
    }

    public String getFormaPagamento() {
        return formaPagamento;
    }

    public void setFormaPagamento(String formaPagamento) {
        this.formaPagamento = formaPagamento;
    }
    private String formaPagamento;
}
