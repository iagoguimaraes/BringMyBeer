/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.bmb.resources;

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
import com.bmb.model.Foto;
import com.bmb.model.Marca;
import com.bmb.model.Tipo;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
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
        List<Produto> ps = new ArrayList<>();
        Produto p = new Produto();
        Foto f = new Foto();
        Marca m = new Marca();
        Tipo t = new Tipo();
        
        t.setIdTipo(1);
        t.setTipo("alimentos");
        
        m.setIdMarca(1);
        m.setMarca("Batata");
        
        f.setIdFoto(1);
        f.setOrdem(1);
        f.setPath("https://yt3.ggpht.com/-cHFMZ-sad-E/AAAAAAAAAAI/AAAAAAAAAAA/dTSVHSra930/s900-c-k-no-mo-rj-c0xffffff/photo.jpg");
        
        p.setIdProduto(1);
        p.setAtivo(true);
        p.setDataCadastro(new Date());
        p.setDescricao("Teste 1aaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaa");
        p.setProduto("name");
        p.setFoto(f);
        p.setMarca(m);
        p.setTipo(t);
        p.setPreco(100);
        p.setIdProduto(1);
        
        ps.add(p);
        
        
        try {
            return Response.ok().entity(ps).build();
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
        Produto p = new Produto();
        Foto f = new Foto();
        Marca m = new Marca();
        Tipo t = new Tipo();
        
        t.setIdTipo(1);
        t.setTipo("alimentos");
        
        m.setIdMarca(1);
        m.setMarca("Batata");
        
        f.setIdFoto(1);
        f.setOrdem(id);
        f.setPath("https://yt3.ggpht.com/-cHFMZ-sad-E/AAAAAAAAAAI/AAAAAAAAAAA/dTSVHSra930/s900-c-k-no-mo-rj-c0xffffff/photo.jpg");
        
        p.setAtivo(true);
        p.setDataCadastro(new Date());
        p.setDescricao("Teste 1");
        p.setFoto(f);
        p.setMarca(m);
        p.setTipo(t);
        p.setPreco(100);
        p.setProduto("name");
        p.setIdProduto(1);
        
        try {
            return Response.ok().entity(p).build();
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
    @Consumes("application/json")
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

    @POST
    @Path("filter")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response search(Filter f) {
        Produto p = new Produto();
        //System.out.println(f);
        try {
            return Response.ok().entity(p).build();
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
        List<Produto> ps = new ArrayList<>();
        Produto p = new Produto();
        Foto f = new Foto();
        Marca m = new Marca();
        Tipo t = new Tipo();
        
        t.setIdTipo(1);
        t.setTipo("alimentos");
        
        m.setIdMarca(1);
        m.setMarca("Batata");
        
        f.setIdFoto(1);
        f.setOrdem(1);
        f.setPath("https://yt3.ggpht.com/-cHFMZ-sad-E/AAAAAAAAAAI/AAAAAAAAAAA/dTSVHSra930/s900-c-k-no-mo-rj-c0xffffff/photo.jpg");
        
        p.setAtivo(true);
        p.setDataCadastro(new Date());
        p.setDescricao("Teste 1");
        p.setProduto("name");
        p.setFoto(f);
        p.setMarca(m);
        p.setTipo(t);
        p.setPreco(100);
        p.setIdProduto(1);
        
        ps.add(p);

        
        try {
            return Response.ok().entity(ps).build();
        }catch (Exception e){
            System.out.print(e);
            return Response.status(Response.Status.NOT_MODIFIED).build();
        }
    }
    
    @GET
    @Path("descricao/{descricao}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response getDesc(@PathParam("descricao") String descricao){
                List<Produto> ps = new ArrayList<>();
        Produto p = new Produto();
        Foto f = new Foto();
        Marca m = new Marca();
        Tipo t = new Tipo();
        
        t.setIdTipo(1);
        t.setTipo("alimentos");
        
        m.setIdMarca(1);
        m.setMarca("Batata");
        
        f.setIdFoto(1);
        f.setOrdem(1);
        f.setPath("https://yt3.ggpht.com/-cHFMZ-sad-E/AAAAAAAAAAI/AAAAAAAAAAA/dTSVHSra930/s900-c-k-no-mo-rj-c0xffffff/photo.jpg");
        
        p.setIdProduto(1);
        p.setAtivo(true);
        p.setDataCadastro(new Date());
        p.setDescricao("Teste 1aaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaa");
        p.setProduto("name");
        p.setFoto(f);
        p.setMarca(m);
        p.setTipo(t);
        p.setPreco(100);
        p.setIdProduto(1);
        
        ps.add(p);
        
        try {
            return Response.ok().entity(ps).build();
        }catch (Exception e){
            System.out.print(e);
            return Response.status(Response.Status.NOT_MODIFIED).build();
        }
    }
}

class Filter{
    private String tipo;
    private Double preco;
    private int desconto;
    private boolean maisComprados;

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public Double getPreco() {
        return preco;
    }

    public void setPreco(Double preco) {
        this.preco = preco;
    }

    public int getDesconto() {
        return desconto;
    }

    public void setDesconto(int desconto) {
        this.desconto = desconto;
    }

    public boolean isMaisComprados() {
        return maisComprados;
    }

    public void setMaisComprados(boolean maisComprados) {
        this.maisComprados = maisComprados;
    }
    
}