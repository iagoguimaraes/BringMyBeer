/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.bmb.dao;

import com.bmb.model.Foto;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

/**
 *
 * @author iago.cguimaraes
 */
public class DaoFoto {
            public Foto obter(int idFoto) throws Exception {
        try {
            Foto foto = new Foto();
            Connection conn = SQLConnection.getConexao();
            String sql = "call obter_foto_by_id(?)";
            PreparedStatement stmt = conn.prepareStatement(sql);

            stmt.setInt(1, idFoto);

            ResultSet rs = stmt.executeQuery();
            while (rs.next()) {
                foto = new Foto(
                        rs.getInt("id_foto"),
                        rs.getString("path"),
                        rs.getInt("ordem"));
            }
            stmt.close();
            conn.close();

            return foto;
        } catch (Exception e) {
            throw e;
        }
    }
}
