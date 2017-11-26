/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the edito
 */
package com.bmb.resources;

import com.bmb.controller.ControllerTipo;
import com.bmb.model.Tipo;
import javax.ws.rs.Path;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.ArrayList;
import java.util.Properties;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.PUT;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Response;
/**
 *
 * @author Miqueas Santos
 */

@Path("tipo")
public class TipoResource {
    
    private ControllerTipo ctrlTipo = new ControllerTipo();

    @Context
    private UriInfo context;
    
    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getTipos(){
        
        try {
            return Response.ok().entity(ctrlTipo.obter()).build();
        } catch (Exception e) {
            return Response.notModified().build();
        }
    }
    
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    public Response postTipos(Tipo tipo){
        try {
            Properties p = new Properties();
            p.setProperty("message", "cadastrado com sucesso");
            ctrlTipo.cadastrarTipo(tipo);
            return Response.ok().entity(p).build();
        } catch (Exception e) {
            return Response.notModified().build();
        }
    }
    
    @PUT
    @Produces(MediaType.APPLICATION_JSON)
    public Response putTipos(Tipo tipo){
        try {
            Properties p = new Properties();
            p.setProperty("message", "Alterado com sucesso");
            ctrlTipo.alterarTipo(tipo);
            return Response.ok().entity(p).build();
        } catch (Exception e) {
            return Response.notModified().build();
        }
    }
    
    @DELETE
    @Produces(MediaType.APPLICATION_JSON)
    public Response deleteTipos(Tipo tipo){
        try {
            Properties p = new Properties();
            p.setProperty("message", "Deletado com sucesso");
            ctrlTipo.deletarTipo(tipo.getIdTipo());
            return Response.ok().entity(p).build();
        } catch (Exception e) {
            return Response.notModified().build();
        }
    }
    
}
