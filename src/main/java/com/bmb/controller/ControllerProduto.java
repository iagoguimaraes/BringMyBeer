/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.bmb.controller;

import com.bmb.dao.DaoProduto;
import com.bmb.model.Produto;
import java.util.ArrayList;

/**
 *
 * @author luis.hlsousa
 */
public class ControllerProduto {

    DaoProduto daoProduto = new DaoProduto();

    public ArrayList<Produto> obter() throws Exception {
        try {
            return daoProduto.obter();
        } catch (Exception e) {
            throw e;
        }
    }
    
    public ArrayList<Produto> obterTipo(String tipo) throws Exception {
        try {
            return daoProduto.obterTipo(tipo);
        } catch (Exception e) {
            throw e;
        }
    }

    public ArrayList<Produto> pesquisar(String produto, String tipo, String marca, double vlrmin, double vlrmax) throws Exception {
        try {
            if (vlrmax == 0) {
                vlrmax = Integer.MAX_VALUE;
            }

            return daoProduto.obter(produto, tipo, marca, vlrmin, vlrmax);
        } catch (Exception e) {
            throw e;
        }
    }

    public Produto obter(int id) throws Exception {
        try {
            return daoProduto.obter(id);
        } catch (Exception e) {
            throw e;
        }
    }

    public ArrayList<Produto> obterDescontos() throws Exception {
        try {
            return daoProduto.obterDescontos();
        } catch (Exception e) {
            throw e;
        }
    }

    public ArrayList<Produto> obterMaisVendidos() throws Exception {
        try {
            return daoProduto.obterMaisVendidos();
        } catch (Exception e) {
            throw e;
        }
    }

}
