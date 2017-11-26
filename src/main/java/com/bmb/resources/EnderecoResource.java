/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor
 */
package com.bmb.resources;


import com.bmb.controller.ControllerEndereco;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import com.bmb.model.Cliente;
import com.bmb.model.Endereco;
import java.util.ArrayList;
import java.util.Properties;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.PUT;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Response;


/**
 * REST Web Service
 *
 * @author Miqueas Santos
 */
@Path("enderecos")
public class EnderecoResource {
    
    @Context
    private UriInfo context;

    /**
     * Creates a new instance of UserResource
     */
    public EnderecoResource() {
    }
    
    ControllerEndereco ctrlEnderecos = new ControllerEndereco();
    
    /**
     * Retrieves representation of an instance of com.bmb.resources.user
     * @return an instance of user
     */
    
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    public Response insertAddress(Cliente c) {
        //TODO return proper representation object
        try {
            return Response.ok().entity(ctrlEnderecos.cadastrar(c, c.getEnderecos().get(0))).build();
        }catch (Exception ex){
            System.out.print(ex);
            return Response.status(Response.Status.NOT_MODIFIED).build();
        }
    }
    
    @DELETE
    @Produces(MediaType.APPLICATION_JSON)
    public Response deleteAddress(@QueryParam("idEndereco") int id){
        Properties p = new Properties();
        Endereco end = new Endereco();
        end.setIdEndereco(id);
        p.setProperty("mensagem", "removido com sucesso");
        try {
            ctrlEnderecos.remover(end);
            return Response.ok().entity(p).build();
        }catch (Exception e){
            System.out.print(e);
            return Response.status(Response.Status.NOT_MODIFIED).build();
        }
    }
    
    @PUT
    @Produces(MediaType.APPLICATION_JSON)
    public Response updateAddress(Endereco c){
        Properties p = new Properties();
        
        p.setProperty("mensagem", "alterado com sucesso");
        try {
            ctrlEnderecos.alterar(c);
            return Response.ok().entity(p).build();
        }catch (Exception e){
            System.out.print(e);
            return Response.status(Response.Status.NOT_MODIFIED).build();
        }
    }
}
