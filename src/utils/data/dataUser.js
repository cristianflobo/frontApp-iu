const dataUser = 
[
    {
        id:1,
        name:"iuvity",
        cuentas:[
            {
                tipo:"Corriente",
                numerocuenta:5060,
                saldo: 50000,
                movimientos:[
                    {Transderencia:{monto:500, destino:"Carlos"}},
                    {Pago:{monto:2000, destino:"Claro"}},
                    
                ]
            },
            {
                tipo:"Ahorro",
                numerocuenta:5160,
                saldo: 50000,
                movimientos:[
                    {Transderencia:{monto:400, destino:"Pedro"}},
                    {Pago:{monto:1000, destino:"Tigo"}},
                    {Pago:{monto:1000, destino:"Tigo"}},
                    {Pago:{monto:1000, destino:"Tigo"}},
                    {Pago:{monto:1000, destino:"Tigo"}},
                    {Pago:{monto:1000, destino:"Tigo"}},
                    {Pago:{monto:1000, destino:"Tigo"}},
                    {Pago:{monto:1000, destino:"Tigo"}},
                    {Pago:{monto:1000, destino:"Tigo"}},
                    {Pago:{monto:1000, destino:"Tigo"}},
                    {Pago:{monto:1000, destino:"Tigo"}},
                    {Pago:{monto:1000, destino:"Tigo"}},
                    {Pago:{monto:1000, destino:"Tigo"}},
                    {Pago:{monto:1000, destino:"Tigo"}},
                    {Pago:{monto:1000, destino:"Tigo"}},
                    {Pago:{monto:1000, destino:"Tigo"}},
                    {Pago:{monto:1000, destino:"Tigo"}},
                    {Pago:{monto:1000, destino:"Tigo"}},
                    {Transderencia:{monto:400, destino:"Pedro"}},
                ]
            }
        ]    
    },
    {
        id:2,
        name:"Juan",
        cuentas:[
            {
                tipo:"Corriente",
                numerocuenta:5260,
                saldo: 60000,
                movimientos:[
                   { Transderencia:{monto:600, destino:"Iuvity"}},
                    {Pago:{monto:1000, destino:"Won"}}
                ]
            },
            {
                tipo:"Ahorro",
                numerocuenta:5360,
                saldo: 60000,
                movimientos:[
                    {Transderencia:{monto:700, destino:"Pedro"}},
                    {Pago:{monto:1500, destino:"Movistar"}}
                ]
            }
        ]    
    }
    
]

export {
    dataUser,
}