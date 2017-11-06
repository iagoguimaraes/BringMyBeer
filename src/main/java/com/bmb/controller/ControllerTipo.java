/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.bmb.controller;

import com.bmb.dao.DaoTipo;
import com.bmb.model.Tipo;
import java.util.List;

/**
 *
 * @author Luis Henrique Lima
 */
public class ControllerTipo {
    
    DaoTipo daoTipo = new DaoTipo();
    
    public void cadastrarTipo(Tipo tipo){
    	try{
    		daoTipo.cadastrarTipo(tipo);
    	}catch(Exception e){
    		System.out.println("Não foi possível fazer a chamada do método 'cadastrar'" + "/n"+ e);
    	}
    }
    
    public void alterarTipo(Tipo tipo){
    	try{
    		daoTipo.alterarTipo(tipo);
    	}catch(Exception e){
    		System.out.println("Não foi possível fazer a chamada do método 'alterar'" + "/n"+ e);
    	}
    }
    
    public void deletarTipo(int idTipo){
    	try{
    		daoTipo.deletarTipo(idTipo);
    	}catch(Exception e){
    		System.out.println("Não foi possível deletar o tipo com ID: "+ idTipo + "/n" + e);
    	}
    }
    
    public void obter(int idTipo){
    	try{
    		daoTipo.obter(idTipo);
    	}catch(Exception e){
    		System.out.println("Não foi possível fazer a chamada do método 'obter' através do ID: "+ idTipo  + "/n"+ e);
    	}
    }
    
    public List<Tipo> obter(){
    	try{
    		return daoTipo.obter();
    	}catch(Exception e){
    		System.out.println("Não foi possível fazer a chamada dod método 'obter lista de Tipos'" + "/n"+ e);
                return null;
    	}
    }
}
