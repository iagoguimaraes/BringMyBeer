/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.bmb.servlet;

import com.bmb.controller.ControllerVenda;
import com.bmb.model.Venda;
import com.google.gson.Gson;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author iago.cguimaraes
 */
public class CadastrarVenda extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try {        
            Gson gson = new Gson();          
            String json = request.getParameter("venda");
            Venda venda = gson.fromJson(json, Venda.class);
            
            ControllerVenda ctrlVenda = new ControllerVenda();
            venda = ctrlVenda.cadastrarVenda(venda);
            json = gson.toJson(venda);

            response.setContentType("application/json");
            response.setCharacterEncoding("UTF-8");
            response.getWriter().write(json);
        } catch (Exception e) {
            response.sendError(HttpServletResponse.SC_BAD_REQUEST, e.getMessage());
        }
    }

}
