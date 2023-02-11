import React from "react";
import img1 from '../assets/jungle1.jpg';
import img2 from '../assets/jungle3.jpg';

const Content = () => {
    return (
        <div className="mx-20">
            <div className="flex justify-center items-center my-10">
                <div>
                    <h2 className="text-center text-3xl">Dolore Magna Aliqua</h2>
                    <p className="py-2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum</p>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-0 bg-yellow-300">
                <div className=" bg-red-600">
                    <img className=" w-full" src={img1}/>
                    <img src={img2}/>
                </div>
                <img className=" h-full" src={img2}/>
            </div>
            <div className="flex justify-center items-center my-10">
                <div>
                    <h2 className="text-center text-3xl">Dolore Magna Aliqua</h2>
                    <p className="py-2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum</p>
                </div>
            </div>
        </div>
    );
}

export default Content;