
package com.bmb.model;

import java.util.Date;

public class Desconto {
    private int idDesconto;

    public Desconto() {
    }

    public int getIdDesconto() {
        return idDesconto;
    }

    public void setIdDesconto(int idDesconto) {
        this.idDesconto = idDesconto;
    }

    public double getPercentual() {
        return percentual;
    }

    public void setPercentual(double percentual) {
        this.percentual = percentual;
    }

    public Date getDataInicial() {
        return dataInicial;
    }

    public void setDataInicial(Date dataInicial) {
        this.dataInicial = dataInicial;
    }

    public Date getDataFinal() {
        return dataFinal;
    }

    public void setDataFinal(Date dataFinal) {
        this.dataFinal = dataFinal;
    }

    public Produto getProduto() {
        return produto;
    }

    public void setProduto(Produto produto) {
        this.produto = produto;
    }
    private double percentual;
    private Date dataInicial;
    private Date dataFinal;
    private Produto produto;
}
