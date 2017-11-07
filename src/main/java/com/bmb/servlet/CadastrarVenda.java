/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.bmb.servlet;

import com.bmb.model.Produto;
import com.bmb.model.Tipo;
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

//            Produto produto = new Produto();            
//            Tipo tipo = new Tipo();
//            tipo.setIdTipo(5);
//            tipo.setTipo("tipo de produto");
//            produto.setTipo(tipo);            
//            produto.setAtivo(true);
//            produto.setDescricao("descricao");
//            produto.setPreco(15.00);          
            Gson gson = new Gson();
//            String json = gson.toJson(produto);

            String json = request.getParameter("produto");
            Produto produto = gson.fromJson(json, Produto.class);

            String id = Integer.toString(produto.getIdProduto()) + ", " + produto.getProduto();
            
            response.setContentType("application/json");
            response.setCharacterEncoding("UTF-8");
            response.getWriter().write(id);
        } catch (Exception e) {
            response.sendError(HttpServletResponse.SC_BAD_REQUEST, e.getMessage());
        }
    }

}
