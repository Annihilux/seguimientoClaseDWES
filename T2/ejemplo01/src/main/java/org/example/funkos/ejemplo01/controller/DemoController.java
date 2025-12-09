package org.example.funkos.ejemplo01.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DemoController {

    @GetMapping("/publico/saludo")
    public String saludo() {
        return "Endpoint público";
    }

    @GetMapping("api/user")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public String soloUser() {
        return "Endpoint solo para USER o ADMIN";
    }

}
