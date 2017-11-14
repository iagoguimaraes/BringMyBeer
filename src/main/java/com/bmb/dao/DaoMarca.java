/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.bmb.dao;

import com.bmb.model.Marca;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author DocSpider01
 */
public class DaoMarca {

    public Marca cadastrar(Marca marca) throws Exception {
        try {
            return null;
        } catch (Exception e) {
            throw e;
        }
    }

    public void alterar(Marca marca) throws Exception {
        try {

        } catch (Exception e) {
            throw e;
        }
    }

    public Marca obter(int idMarca) throws Exception {
        try {
            Marca marca = new Marca();
            Connection conn = SQLConnection.getConexao();
            String sql = "call obter_marca_by_id(?)";
            PreparedStatement stmt = conn.prepareStatement(sql);

            stmt.setInt(1, idMarca);

            ResultSet rs = stmt.executeQuery();
            while (rs.next()) {
                marca = new Marca(
                        rs.getInt("id_marca"),
                        rs.getString("marca"));
            }
            stmt.close();
            conn.close();

            return marca;
        } catch (Exception e) {
            throw e;
        }
    }

    public void deletar(Marca marca) throws Exception {
        try {

        } catch (Exception e) {
            throw e;
        }
    }
}
