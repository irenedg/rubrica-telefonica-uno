
package it.iad2.rubricatelefonicaunoserver.dto;


public class UtenteDto {
    private String user;
    private String password;

    public UtenteDto() {
    }

    public UtenteDto(String user, String password) {
        this.user = user;
        this.password = password;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
