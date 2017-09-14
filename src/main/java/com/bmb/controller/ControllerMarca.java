/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.bmb.controller;

import com.bmb.dao.DaoMarca;
import com.bmb.model.Marca;
import java.util.List;

/**
 *
 * @author DocSpider01
 */
public class ControllerMarca {
    public static void cadastrar(Marca marca) throws Exception{
        try{
            DaoMarca.cadastrar(marca);
        }catch(Exception e){
            System.out.println("Não foi possivel cadastrar.");
        }
    }
    
    public static void alterar(Marca marca) throws Exception{
        try{
            DaoMarca.alterar(marca);
        }catch(Exception e){
            System.out.println("Não foi possivel alterar.");
        }
    }
    
    public static void obter(int idMarca) throws Exception{
        try{
            DaoMarca.obter(idMarca);
        }catch(Exception e){
            System.out.println("Não foi possivel recuperar o objeto.");
        }
    }
    
    public static List<Marca> obter() throws Exception{
        try{
            return DaoMarca.obter();
        }catch(Exception e){
            System.out.println("Não foi possivel recuperar os objetos.");
            return null;
        }
    }
    
    public static void deletar(int idMarca) throws Exception{
        try{
            DaoMarca.deletar(idMarca);
        }catch(Exception e){
            System.out.println("Não foi possivel deletars.");
        }
    }
}
