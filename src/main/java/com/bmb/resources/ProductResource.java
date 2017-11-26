/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor
 */
package com.bmb.resources;

import com.bmb.controller.ControllerMarca;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.PathParam;
import javax.ws.rs.Consumes;
import javax.ws.rs.PUT;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.GET;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import com.bmb.model.Produto;

/*controllers*/
import com.bmb.controller.ControllerProduto;
import com.bmb.controller.ControllerTipo;
import com.bmb.model.Foto;
import com.bmb.model.Marca;
import com.bmb.model.Tipo;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Response;

/**
 * REST Web Service
 *
 * @author Miqueas Santos
 */
@Path("produto")
public class ProductResource {
    
    private ControllerProduto ctrlProduto = new ControllerProduto();

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of GenericResource
     */
    public ProductResource() {
    }

    /**
     * metodo para consultar todos os produtos do banco
     */
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getJson() {        
        try {
            return Response.ok().entity(ctrlProduto.obter()).build();
        }catch (Exception e){
            System.out.print(e);
            return Response.status(Response.Status.NOT_MODIFIED).build();
        }
    }

    /**
     * metodo para obter um detalhe de produto
     */
    @GET
    @Path("{id}")
    @Consumes("application/json")
    public Response putJson(@PathParam("id") int id) {
        try {
            return Response.ok().entity(ctrlProduto.obter(id)).build();
        }catch (Exception e){
            System.out.print(e);
            return Response.status(Response.Status.NOT_MODIFIED).build();
        }
    }
    
    
    /**
     * Metodo para cadastrar o produto
     */
    @POST
    @Consumes("application/json")
    public Response post(Produto content) {
        try {
            return Response.status(Response.Status.OK).build();
        }catch (Exception e){
            System.out.print(e);
            return Response.status(Response.Status.NOT_MODIFIED).build();
        }
    }
    
    /**
     * Metodo para atualizar o produto
    */
    @PUT
    @Produces(MediaType.APPLICATION_JSON)
    public Response put(Produto content) {
        try {
            return Response.status(Response.Status.OK).build();
        }catch (Exception e){
            System.out.print(e);
            return Response.status(Response.Status.NOT_MODIFIED).build();
        }
    }
    
    /**
     * Metodo para atualizar o produto
    */
    
        /**
     * metodo para consultar todos os produtos do banco
     */
    @GET
    @Path("desconto")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getDesconto() {        
        try {
            return Response.ok().entity(ctrlProduto.obterDescontos()).build();
        }catch (Exception e){
            System.out.print(e);
            return Response.status(Response.Status.NOT_MODIFIED).build();
        }
    }

    @POST
    @Path("filter")
    @Produces(MediaType.APPLICATION_JSON)
    public Response search(@QueryParam("produto") String produto, 
                           @QueryParam("tipo") String tipo, 
                           @QueryParam("marca") String marca, 
                           @QueryParam("valormin") double min, 
                           @QueryParam("valormax") double max) {
        try {
            return Response.ok().entity(ctrlProduto.pesquisar(produto, tipo, marca, min, max)).build();
        }catch (Exception e){
            System.out.print(e);
            return Response.status(Response.Status.NOT_MODIFIED).build();
        }
    }
    
    @GET
    @Path("filter/{tipo}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response tipo(@PathParam("tipo") String tipo){
        try {
            return Response.ok().entity(ctrlProduto.obterTipo(tipo)).build();
        }catch (Exception e){
            System.out.print(e);
            return Response.status(Response.Status.NOT_MODIFIED).build();
        }
    }
    
    @GET
    @Path("marca")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getMarcas(){
        ControllerMarca controllerMaca = new ControllerMarca();
        try {
            return Response.ok().entity(controllerMaca.obter()).build();
        }catch (Exception e){
            System.out.print(e);
            return Response.status(Response.Status.NOT_MODIFIED).build();
        }
    }
    
    @GET
    @Path("tipo")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getTipos(){
        ControllerTipo ctrlTipo = new ControllerTipo();
        try {
            return Response.ok().entity(ctrlTipo.obter()).build();
        }catch (Exception e){
            System.out.print(e);
            return Response.status(Response.Status.NOT_MODIFIED).build();
        }
    }
}