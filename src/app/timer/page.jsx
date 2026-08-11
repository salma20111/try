import CountDown from "@/Components/Timers/countDown"
import StopWatch from "@/Components/Timers/StopWatch"

export const metadata = {
    title: 'timers',
    description: 'timers and count down learning '
}


export default function TimerPage() {
    return( 
        <div>
            <StopWatch />
            <CountDown />
        </div>
    )
}