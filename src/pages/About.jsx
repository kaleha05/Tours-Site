import React from "react";
import Leading from "../components/Leading";
import teamImg from '../assets/team.jpg';

const About = () => {
    return (
        <>
            <Leading />
            <div className="mx-20">
                <div className="flex justify-center items-center my-10">
                    <div>
                        <h2 className="text-left text-3xl">Dolore Magna Aliqua</h2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum</p>
                        <div className="grid grid-cols-4 gap-2">
                            <img src="https://mdbootstrap.com//img/Photos/Square/1.jpg" className="ma-w-full h-auto rounded-full" />
                            <img src="https://mdbootstrap.com//img/Photos/Square/1.jpg" className="ma-w-full h-auto rounded-full" />
                            <img src="https://mdbootstrap.com//img/Photos/Square/1.jpg" className="ma-w-full h-auto rounded-full" />
                            <img src="https://mdbootstrap.com//img/Photos/Square/1.jpg" className="ma-w-full h-auto rounded-full" />
                        </div>
                        <h2 className="text-left text-3xl mt-4 py-3">Dolore Magna Aliqua</h2>
                        <p>Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus</p>
                        <img src={teamImg} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;