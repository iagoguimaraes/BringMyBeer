package com.bmb.model;

public class Marca {
    private int idMarca;

    public Marca() {
    }

    public Marca(int idMarca, String marca) {
        this.idMarca = idMarca;
        this.marca = marca;
    }
       
    public int getIdMarca() {
        return idMarca;
    }

    public void setIdMarca(int idMarca) {
        this.idMarca = idMarca;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }
    private String marca;
}
