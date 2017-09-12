
package com.bmb.model;

import java.util.ArrayList;
import java.util.Date;

public class Venda {
    private int idVenda;
    private Date data;
    private boolean confirmado;
    private boolean cancelado;
    private ArrayList<ItemVenda> items;
    private FormaPagamento formaPagamento;
    private Cliente cliente;
}
