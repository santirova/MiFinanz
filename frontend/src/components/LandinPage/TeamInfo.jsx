import { AiOutlineLinkedin } from 'react-icons/ai';

const TeamInfo = () => {
    const initialState =
        [
            {
                id: 0,
                name: "Josefina Eciolaza",
                position: "PM",
                image: "",
                linkedin: "",
                otherSocialMedia: ""
            },
            {
                id: 1,
                name: "Santiago Rovaletti",
                position: "BACKEND",
                image: "",
                linkedin: "",
                otherSocialMedia: ""
            },
            {
                id: 2,
                name: "Víctor Morales",
                position: "FRONTEND",
                image: "",
                linkedin: "",
                otherSocialMedia: ""
            },
            {
                id: 3,
                name: "Nazareno Susunday",
                position: "UI-UX",
                image: "",
                linkedin: "",
                otherSocialMedia: ""
            },
            {
                id: 4,
                name: "Mirgelys Serrano",
                position: "BACKEND",
                image: "",
                linkedin: "",
                otherSocialMedia: ""
            },
            {
                id: 5,
                name: "Esmir R.Castellano",
                position: "FRONTEND",
                image: "",
                linkedin: "",
                otherSocialMedia: ""
            },
            {
                id: 6,
                name: "Lucas Barceló",
                position: "FRONTEND",
                image: "",
                linkedin: "",
                otherSocialMedia: ""
            },
            {
                id: 7,
                name: "Roberta Mendoza",
                position: "QA",
                image: "",
                linkedin: "",
                otherSocialMedia: ""
            }
        ]
    return (
        <section className="w-full grid grid-cols-4 gap-4">
            {initialState.map(item => (
                <div key={item.id} className='flex flex-col justify-center items-center gap-2'>
                    <div className="bg-white w-24 h-24 rounded-full"> </div>
                    <h3 className='font-bold text-xl'>{item.name}</h3>
                    <div className='flex items-center gap-2'>
                        <p>{item.position}</p>
                        <AiOutlineLinkedin className='text-3xl' />
                    </div>
                </div>
            )
            )}

        </section>
    )
}

export default TeamInfo