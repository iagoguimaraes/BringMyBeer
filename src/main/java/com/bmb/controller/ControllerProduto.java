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

    public ArrayList<Produto> obter() throws Exception{
        try {
            return daoProduto.obter();
        } catch (Exception e) {
            throw e;
        }
    }

    public ArrayList<Produto> pesquisar() throws Exception{
        try {
            return null;
        } catch (Exception e) {
            throw e;
        }
    }
    
    public Produto obter(int id)throws Exception{
        try {
            return daoProduto.obter(id);
        } catch (Exception e) {
            throw e;
        }
    }

}
