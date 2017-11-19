/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.bmb.resources;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.GET;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import com.bmb.model.Venda;
import com.bmb.controller.ControllerVenda;
import com.bmb.model.Cliente;
import java.util.Properties;
import javax.ws.rs.PUT;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Response;

/**
 * REST Web Service
 *
 * @author Miqueas Santos
 */
@Path("venda")
public class VendaResource {
    
    private ControllerVenda ctrlVenda = new ControllerVenda();
    /**
     * POST method for release or creating an instance of VendaResource
     * @param content representation for the resource
     * @return an HTTP response with content of the updated or created resource.
     */
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    public Response buyProduct(Venda venda) {
        Properties p = new Properties();
        p.setProperty("message", "venda realizada com sucesso");
        try {
            ctrlVenda.cadastrarVenda(venda);
            return Response.ok().entity(p).build();
        } catch (Exception e) {
            System.out.println(e);
            return Response.ok().entity(null).build();
        }
        //System.out.println("consultou");
    }
    
    /**
     * Retrieves representation of an instance of com.bmb.resources.GenericResource
     * @return an instance of java.lang.String
     */
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    //@Consumes(MediaType.APPLICATION_JSON)
    public Response getSales(@QueryParam("idCliente") int idClient) {
        //TODO return proper representation object
        Cliente idCliente = new Cliente();
        idCliente.setIdCliente(idClient);
        try {
            return Response.ok().entity(ctrlVenda.obter(idCliente)).build();
        } catch (Exception e) {
            System.out.println(e);
            return Response.ok().entity(null).build();
        }
    }
    
    @PUT
    @Produces(MediaType.APPLICATION_JSON)
    public Response updateSales(Venda venda){
        //TODO return proper representation object
        Properties p = new Properties();
        p.setProperty("message", "venda atualizada com sucesso");
        try {
            return Response.ok().entity(p).build();
        } catch (Exception e) {
            System.out.println(e);
            return Response.ok().entity(null).build();
        }
    }
    
    
}
