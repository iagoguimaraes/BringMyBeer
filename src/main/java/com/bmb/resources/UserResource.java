/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.bmb.resources;


import com.bmb.controller.ControllerCliente;
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
import javax.ws.rs.GET;
import javax.ws.rs.PUT;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Response;


/**
 * REST Web Service
 *
 * @author Miqueas Santos
 */
@Path("usuario")
public class UserResource {
    
    ControllerCliente ctrlCliente = new ControllerCliente();
            
    @Context
    private UriInfo context;

    /**
     * Creates a new instance of UserResource
     */
    public UserResource() {
    }
    
    
    /**
     * Retrieves representation of an instance of com.bmb.resources.user
     * @return an instance of user
     */
    @Path("login")
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    public Response getUser(Cliente c) {
        //TODO return proper representation object
        /*
        Endereco e = new Endereco();
        e.setBairro("jardim Teste");
        e.setCep("04844-150");
        e.setComplemento("casa");
        e.setLogradouro("Rua do joãozinho");
        e.setNumero(123);
        e.setCidade("São Paulo");
        e.setEstado("SP");
        ArrayList<Endereco> ends = new ArrayList<Endereco>();
        ends.add(e);
        
        c.setIdCliente(1);
        c.setCpf("12345678911");
       
        c.setCpf("99999999999");
        c.setNome("fulano");
        c.setSobrenome("Beltrano");
        c.setToken("ADASKLJDAKSJD");
        c.setEnderecos(ends);*/
        try {
            return Response.ok().entity(ctrlCliente.logar(c.getEmail(), c.getSenha())).build();
        }catch (Exception a){
            System.out.print(a);
            return Response.status(Response.Status.NOT_MODIFIED).build();
        }
    }
    
    
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    public Response saveUser(Cliente c){
        try {
            return Response.ok().entity(ctrlCliente.cadastrar(c)).build();
        }catch (Exception e){
            System.out.print(e);
            return Response.status(Response.Status.NOT_MODIFIED).build();
        }
    }
    
    @PUT
    @Produces(MediaType.APPLICATION_JSON)
    public Response updateUser(Cliente c){
        Properties p = new Properties();
        p.setProperty("mensagem", "Alterado com sucesso");
        try {
            ctrlCliente.alterar(c);
            return Response.ok().entity(p).build();
        }catch (Exception e){
            System.out.print(e);
            return Response.status(Response.Status.NOT_MODIFIED).build();
        }
    }
}
