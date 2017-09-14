/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.bmb.dao;

import com.bmb.model.Tipo;
import java.util.ArrayList;
import java.util.List;


/**
 *
 * @author Luis Henrique Lima
 */
public class DaoTipo {
    
    static List<Tipo> tipos = new ArrayList<>();
    
    
    public static void cadastrarTipo(Tipo tipo){
        try{
            tipos.add(tipo);
        }catch(Exception e){
            System.out.println("Não foi possível cadastrar o tipo");
        }
    }
}
