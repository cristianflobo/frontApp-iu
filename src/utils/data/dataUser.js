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
                movimientos:{
                    tanferencia:{monto:500, destino:"Carlos"},
                    pago:{monto:2000, destino:"Claro"}
                }
            },
            {
                tipo:"Ahorro",
                numerocuenta:5160,
                saldo: 50000,
                movimientos:{
                    tanferencia:{monto:400, destino:"Pedro"},
                    pago:{monto:1000, destino:"Tigo"}
                }
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
                movimientos:{
                    tanferencia:{monto:600, destino:"Iuvity"},
                    pago:{monto:1000, destino:"Won"}
                }
            },
            {
                tipo:"Ahorro",
                numerocuenta:5360,
                saldo: 60000,
                movimientos:{
                    tanferencia:{monto:700, destino:"Pedro"},
                    pago:{monto:1500, destino:"Movistar"}
                }
            }
        ]    
    }
    
]

export {
    dataUser,
}