import StopWatch from "@/Components/Timers/StopWatch"

export const metadata = {
    title: 'timers',
    description: 'timers and count down learning '
}


export default function TimerPage() {
    return( 
        <div>
            <StopWatch />
        </div>
    )
}