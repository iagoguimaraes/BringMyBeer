/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.bmb.dao;

import com.bmb.model.Marca;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author DocSpider01
 */
public class DaoMarca {
    static List<Marca> marcas = new ArrayList<Marca>();
    
    public static void cadastrar(Marca marca) throws Exception{
        try{
            marcas.add(marca);            
        }catch(Exception e){
            System.out.println("Não foi possivel cadastrar.");
        }
    }
    
    public static void alterar(Marca marca) throws Exception{
        try{
            for(int i=0; i < marcas.size(); i++){
                if(marca.getIdMarca() == marcas.get(i).getIdMarca()){
                    marcas.add(i,marca);
                }
            }
        }catch(Exception e){
            System.out.println("Não foi possivel alterar.");
        }
    }
    
    public static Marca obter(int idMarca) throws Exception{
        Marca marcaObtida = new Marca();
        try{
            for(int i=0; i < marcas.size(); i++){
                if(idMarca == marcas.get(i).getIdMarca()){
                    marcaObtida = marcas.get(i);
                }
            }
        }catch(Exception e){
            System.out.println("Não foi possivel recuperar o objeto.");
            return null;
        }
        return marcaObtida;
    }
    
    public static List<Marca> obter() throws Exception{
        try{
            return marcas;
        }catch(Exception e){
            System.out.println("Não foi possivel recuperar os objetos.");
            return null;
        }
    }
    
    public static void deletar(int idMarca) throws Exception{
        try{
            for(int i=0; i < marcas.size(); i++){
                if(idMarca == marcas.get(i).getIdMarca()){
                    marcas.remove(i);
                }
        }
        }catch(Exception e){
            System.out.println("Não foi possivel deletars.");
        }
    }
}
