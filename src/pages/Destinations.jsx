import React from "react";
import Leading from "../components/Leading";
import { Link } from "react-router-dom";

const Destinations = () => {
    return (
        <>
            <div className="flex justify-center w-full bg-[url('https://res.cloudinary.com/dcxosct8v/image/upload/v1676231669/aloolo/WhatsApp_Image_2023-02-12_at_21.15.57_rszqle.jpg')]">
                <h1 className="text-7xl text-white py-10">Destinations</h1>
            </div>
            <h2 className="text-left text-3xl mx-10 mt-10">Nairobi National Park</h2>
            <p className="mx-10">A short drive out of Nairobi’s central business district is the Nairobi National Park. Wide open grass plains and backdrop of the city scrapers, scattered acacia bush play host to a wide variety of wildlife including the endangered black rhino, lions, leopards, cheetahs, hyenas, buffaloes, giraffes and diverse birdlife with over 400 species recorded. Visitors can enjoy the park’s picnic sites, three campsites and the walking trails for hikers.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 m-10">
                <img src="https://res.cloudinary.com/dcxosct8v/image/upload/v1676313513/aloolo/Nairobi%20National%20Park/sv_8_pnazai.jpg" />
                <img src="https://res.cloudinary.com/dcxosct8v/image/upload/v1676315333/aloolo/WhatsApp_Image_2023-02-12_at_21.15.57_3_g9ekha.jpg" />
            </div>
            <div className="flex justify-center my-6">
                <button><Link to="">See packages</Link></button>
            </div>
            <div className="py-2 bg-gray-200">
                <h2 className="text-left text-3xl mx-10 mt-10">Maasai Mara</h2>
                <p className="mx-10">A unique wildlife conservation haven, famous for its spectacular natural diversity of wildlife and is a premier Kenya Safari location in East Africa, offering visitors numerous reasons to visit this animal paradise. Large numbers of Lions, Cheetah, Elephant, Rhino, African Buffalo, Wildebeest, Giraffe, Zebra and many more animals are found in the park in their natural habitat, unconfined and free to roam the vast wilderness stretching for miles on end.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 m-10 md:gap-5 md:m-10">
                    <img src="https://res.cloudinary.com/dcxosct8v/image/upload/v1676314319/aloolo/Maasai%20Mara/IMG_6262_lweoom.jpg" />
                    <img src="https://res.cloudinary.com/dcxosct8v/image/upload/v1676314278/aloolo/Maasai%20Mara/1_16_of_27_zcakgg.jpg" />
                    <img src="https://res.cloudinary.com/dcxosct8v/image/upload/v1676314255/aloolo/Maasai%20Mara/ma05_ofqxjj.jpg" />
                </div>
                <div className="flex justify-center my-6">
                    <button><Link to="">See packages</Link></button>
                </div>
            </div>

            <h2 className="text-left text-3xl mx-10 mt-10">Tsavo National Park</h2>
            <p className="mx-10">The sight of dust-red elephant wallowing, rolling and spraying each other with the midnight blue waters of palm-shaded Galana River is one of the most evocative images in Africa. This, along with the 300 kilomtere long Yatta Plateau, the longest lava flow in the world, make for an adventure unlike any other in the Tsavo.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 m-10">
                <img src="https://res.cloudinary.com/dcxosct8v/image/upload/v1676313434/aloolo/Tsavo/kk_4_of_23_bnb2jh.jpg" />
                <img src="https://res.cloudinary.com/dcxosct8v/image/upload/v1676313405/aloolo/Tsavo/IMG_1054_masgo8.jpg" />
            </div>
            <div className="flex justify-center my-6">
                <button><Link to="">See packages</Link></button>
            </div>

            <h2 className="text-left text-3xl mx-10 mt-10">Naivasha</h2>
            <p className="mx-10">At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 m-10">
                <img src="https://res.cloudinary.com/dcxosct8v/image/upload/v1676313276/aloolo/naivasha/LN_14_of_56_uac6xt.jpg" />
                <img src="https://res.cloudinary.com/dcxosct8v/image/upload/v1676313371/aloolo/naivasha/LN_40_of_56_j6jb4e.jpg" />
            </div>
            <div className="flex justify-center my-6">
                <button><Link to="">See packages</Link></button>
            </div>
        </>
    );
}

export default Destinations;