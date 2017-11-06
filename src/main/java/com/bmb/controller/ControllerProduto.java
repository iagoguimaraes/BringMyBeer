/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.bmb.controller;

import com.bmb.dao.DaoProduto;
import com.bmb.model.Produto;
import java.util.List;

/**
 *
 * @author luis.hlsousa
 */
public class ControllerProduto {
    
    DaoProduto daoProd = new DaoProduto();
    
    public void cadastrarProduto(Produto produto){
    	try{
    		daoProd.cadastrarProduto(produto);
    	}catch(Exception e){
    		System.out.println("Não foi possível fazer a chamada do método 'cadastrar'" + "/n"+ e);
    	}
    }
    
    public void alterarProduto(Produto produto){
    	try{
    		daoProd.alterarProduto(produto);
    	}catch(Exception e){
    		System.out.println("Não foi possível fazer a chamada do método 'alterar'" + "/n"+ e);
    	}
    }
    
    public void deletarProduto(int idProduto){
    	try{
    		daoProd.deletarProduto(idProduto);
    	}catch(Exception e){
    		System.out.println("Não foi possível deletar o tipo com ID: "+ idProduto + "/n" + e);
    	}
    }
    
    public void obter(int idProduto){
    	try{
    		daoProd.obter(idProduto);
    	}catch(Exception e){
    		System.out.println("Não foi possível fazer a chamada do método 'obter' através do ID: "+ idProduto  + "/n"+ e);
    	}
    }
    
    public List<Produto> obter(){
    	try{
    		return daoProd.obter();
    	}catch(Exception e){
    		System.out.println("Não foi possível fazer a chamada dod método 'obter lista de Produtos'" + "/n"+ e);
                return null;
    	}
    }
}
