
package com.bmb.model;

public class Foto {
    private int idFoto;

    public Foto() {
    }

    public Foto(int idFoto, String path, int ordem) {
        this.idFoto = idFoto;
        this.path = path;
        this.ordem = ordem;
    }  

    public int getIdFoto() {
        return idFoto;
    }

    public void setIdFoto(int idFoto) {
        this.idFoto = idFoto;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public int getOrdem() {
        return ordem;
    }

    public void setOrdem(int ordem) {
        this.ordem = ordem;
    }
    private String path;
    private int ordem;
}
