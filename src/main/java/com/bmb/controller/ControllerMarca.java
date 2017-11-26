/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.bmb.controller;

import com.bmb.dao.DaoMarca;
import com.bmb.model.Marca;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author DocSpider01
 */
public class ControllerMarca {
    
    private DaoMarca dao = new DaoMarca();
    
    public ArrayList<Marca> obter () throws Exception {
        try {
            return dao.obter();
        } catch (Exception e) {
            throw e;
        }
    }
    
}
