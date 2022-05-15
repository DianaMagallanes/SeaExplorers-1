const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

(async function main() {
    try {
        const member1 = await prisma.Member.upsert({
            where: { id: 1 },
            update: {},
            create: {
                name: "DianaMagallanes",
                username: "dianaM",
                email: "dianamagallanes@gmail.com",
                password: "plisFavorFunciona!",
            },
        });      
        const member2 = await prisma.Member.upsert({
            where: { id: 2 },
            update: {},
            create: {
                name: "Alejandro Morgan",
                username: "AlejandroM",
                email: "alejandromorgan@gmail.com",
                password: "aQueSiFunciona!",
            },
        });     
        const member3 = await prisma.Member.upsert({
            where: { id: 3 },
            update: {},
            create: {
                name: "Magdiel Castellanos",
                username: "MagdielC",
                email: "magdielcastellanos@gmail.com",
                password: "mirameFuncionar!",
            },
        });    
        const member4 = await prisma.Member.upsert({
            where: { id: 4 },
            update: {},
            create: {
                name: "Daniel Espinoza",
                username: "DanielE",
                email: "danielespinoza@gmail.com",
                password: "jaYaFunciono!",
            },
        });      
        const member5 = await prisma.Member.upsert({
            where: { id: 5 },
            update: {},
            create: {
                name: "Sergio Altuzar",
                username: "SergioAltuzar",
                email: "sergioaltuzar@gmail.com",
                password: "funcionandoBienSuave!",
            },
        });     
           
        console.log("Create members/members/member");

        const event1 = await prisma.Event.upsert({
            where: { id: 1 },
            update: {},
            create: {
                name: "Ataque Pirata",
                activity: "Vayamos en busqueda del tesoro y ayudemos a limpiar los mares de nuestro bello país",
                location: "Guaymas, Sonora",
                type: "Evento de playa",
                personQuota: 100,
                organizer: "Juanito Perez"
            },
        });   
 
        console.log("Create events/events/event");
           
        const Organizer1 = await prisma.Organizer.upsert({
            where: { id: 1 },
            update: {},
            create: {
                name: "Juanito Perez",
                username: "JuanitoP",
                email: "juanitoperez@gmail.com",
                password: "soyElOrganizadorNumeroUno!",
            },
        });   

        console.log("Create organizers/organizers/organizer");
    } catch(e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
})();