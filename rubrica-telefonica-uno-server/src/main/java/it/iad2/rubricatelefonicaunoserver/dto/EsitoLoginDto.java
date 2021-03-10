package it.iad2.rubricatelefonicaunoserver.dto;


public class EsitoLoginDto {
    private boolean esitoLogin;

    public EsitoLoginDto() {
    }

    public EsitoLoginDto(boolean esitoLogin) {
        this.esitoLogin = esitoLogin;
    }

    public boolean isEsitoLogin() {
        return esitoLogin;
    }

    public void setEsitoLogin(boolean esitoLogin) {
        this.esitoLogin = esitoLogin;
    }
}
