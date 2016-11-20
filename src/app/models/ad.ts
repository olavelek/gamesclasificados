export class Ad {
    // dummy data
    static dummyAds: Ad[] = [
        new Ad(1, 'Game of thrones', 'Maria', 'maria@gmail.com',
        '7878889876', 'tel,email', 2.4, 'Barceloneta, PR', 'PS4', 'games', 'alfa'),
        new Ad(2, 'Kill them all', 'Pedro', 'pedro@gmail.com',
        '7878556553', 'email', 10, 'Utuado, PR', 'PS3', 'games', 'beta'),
        new Ad(3, 'Original - Red', 'Cristina', 'crist@gmail.com',
        '7871022253', 'tel', 15.25, 'Vega Baja, PR', 'PS4', 'ctrls', 'gamma'),
        new Ad(4, 'Original', 'Antonio', 'don@gmail.com',
        '7876554386', 'email', 9.999, 'Canovanas, PR', 'PS3', 'ctrls', 'pi'),
        new Ad(5, 'HDMI', 'Juan Carlos', 'don@gmail.com',
        '7876543332', 'email', 41, 'Yauco, PR', 'XOne', 'cblsnetw', 'teta'),
        new Ad(6, 'Power AC', 'Humberto', 'don@gmail.com',
        '7876548865', 'tel,email', 40, 'Guayanilla, PR', 'PS2', 'cblsnetw', 'anet'),
        new Ad(7, 'Control Sensor Bateries', 'Jose', 'don@gmail.com',
        '7872325134', 'tel,email', 28, 'Añasco, PR', 'PS3', 'btrschr', 'anton'),
        new Ad(8, 'Originals', 'Cristina', 'don@gmail.com',
        '7876453267', 'tel', 22, 'Utuado, PR', 'XOne', 'btrschr', 'charlie'),
        new Ad(9, 'Collection Toy', 'Alfredo', 'don@gmail.com',
        '7874655267', 'tel', 20, 'Fajardo, PR', 'PS3', 'other', 'matos'),
        new Ad(10, 'Cover Sticker', 'Maria', 'don@gmail.com',
        '7876548237', 'tel', 5, 'Luquillo, PR', 'X360', 'other', 'sur'),
        new Ad(11, 'Metal Gear 5', 'Erika', 'don@gmail.com',
        '7876345267', 'tel', 10, 'San Juan, PR', 'X360', 'games', 'gamma17'),
        new Ad(12, 'CoD4', 'Hiram', 'don@gmail.com',
        '7873458467', 'tel,email', 10, 'Aguadilla, PR', 'X360', 'games', 'beta16'),
        new Ad(13, 'Original', 'Alexander', 'don@gmail.com',
        '7873567245', 'Original - Black', 44, 'Lares, PR', 'WiiU', 'ctrls', 'alpha15'),
        new Ad(14, 'Original', 'Julia', 'don@gmail.com',
        '7876337553', 'Nix Gamming', 12.95, 'Ponce, PR', 'PS3', 'ctrls', 'delta16'),
        new Ad(15, 'Game of thrones', 'Maria', 'maria@gmail.com',
        '7878889876', 'email', 2.4, 'Barceloneta, PR', 'WiiU', 'games', 'charlie14'),
        new Ad(16, 'Kill them all', 'Pedro', 'pedro@gmail.com',
        '7876342231', 'email', 10, 'Utuado, PR', 'PS4', 'games', 'beta13'),
        new Ad(17, 'Original', 'Cristina', 'crist@gmail.com',
        '7871056884', 'tel', 15.25, 'Vega Baja, PR', 'PS4', 'ctrls', 'gamma12'),
        new Ad(18, 'Original', 'Antonio', 'don@gmail.com',
        '7877245654', 'tel,email', 10, 'Jayuya, PR', 'Wii', 'ctrls', 'delta11'),
        new Ad(19, 'Lan', 'Joel', 'don@gmail.com',
        '7878756823', 'tel,email', 20, 'Culebra, PR', 'PS3', 'cblsnetw', 'delta10'),
        new Ad(20, 'HDMI', 'Julissa', 'don@gmail.com',
        '7872388989', 'tel,email', 20, 'Viques, PR', 'N2DS', 'cblsnetw', 'delta9'),
        new Ad(21, 'Replacement', 'Patricia', 'don@gmail.com',
        '7876673245', 'tel,email', 20, 'Trujillo Alto, PR', 'N3DS', 'btrschr', 'delta8'),
        new Ad(22, 'Controller Rechargeable', 'Ka', 'don@gmail.com',
        '7871284346', 'email', 14.25, 'Cataño, PR', 'Wii', 'btrschr', 'delta7'),
        new Ad(23, 'Collection Miniatures Mario', 'Katy', 'don@gmail.com',
        '7874327654', 'tel,email', 10.99, 'Manati, PR', 'Wii', 'other', 'delta6'),
        new Ad(24, 'Cover Sticker', 'Sindy', 'don@gmail.com',
        '7870985656', 'tel,email', 32.50, 'Santa Isabel, PR', 'PS3', 'other', 'delta5'),
        new Ad(25, 'Revenge', 'Gabriela', 'don@gmail.com',
        '7871751212', 'email', 60, 'Isabela, PR', 'Wii', 'games', 'delta4'),
        new Ad(26, 'Revenge', 'Juan', 'don@gmail.com',
        '7876327566', 'tel,email', 25, 'Cabo Rijo, PR', 'Wii', 'games', 'delta3'),
        new Ad(27, 'Rapid Fire Control', 'Carlos', 'don@gmail.com',
        '7879945267', 'email', 12, 'Rincon, PR', 'PS3', 'ctrls', 'delta2'),
        new Ad(28, 'FF Character Poster', 'Antonio', 'don@gmail.com',
        '7876335467', 'tel', 15, 'Ponce, PR', 'Other', 'other', 'delta1')
    ];

    id: number;
    name: string;
    owner: string;
    email: string;
    telephone: string;
    contactMethod: string;
    price: number;
    location: string;
    console: string;
    section: string;
    itemIdentification: string;
    expDate: Date;

    constructor(id: number,
    name: string,
    owner: string,
    email: string,
    telephone: string,
    contactMethod: string,
    price: number,
    location: string,
    console: string,
    section: string,
    itemIdentification: string) {
        this.id = id;
        this.name = name;
        this.owner = owner;
        this.email = email;
        this.telephone = telephone;
        this.contactMethod = contactMethod;
        this.price = price;
        this.location = location;
        this.console = console;
        this.section = section;
        this.itemIdentification = itemIdentification;
    }
}
