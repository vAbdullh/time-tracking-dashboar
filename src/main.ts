let data: any
(async () => {
    try {
        const response: Response = await fetch('../public/data.json');
        if (!response.ok) {
            throw new Error('data file not response');
        }
        const jsonData: any = await response.json();

        data = jsonData
    } catch (err) {
        console.error(err);
    }
})();



const sections = document.querySelectorAll('section')

const loadingAnimation = () => {

    sections.forEach(section => {

        const secondDiv = section.querySelectorAll('div')[1];

        if (secondDiv) {
            secondDiv.classList.add('animate-pulse');
        }

    })
};

const removeLoadingAnimation = () => {

    sections.forEach(section => {

        const secondDiv = section.querySelectorAll('div')[1];

        if (secondDiv) {
            secondDiv.classList.remove('animate-pulse');
        }

    })
};

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.nav-btn');

    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const target = event.currentTarget as HTMLElement;

            if (target.classList.contains('text-active')) {
                return;
            }
            loadingAnimation();

            buttons.forEach(btn => btn.classList.remove('text-active'));

            target.classList.add('text-active');


            updatePage(target.id);

            removeLoadingAnimation()
        });
    });
});

function updatePage(target: string) {
    if (target != 'daily'
        && target != 'weekly'
        && target != 'monthly'
    ) {
        return
    }

    const items = [
        { id: 'workCurrent', dataTarget: data[0].timeframes[target].current },
        { id: 'workPrevious', dataTarget: data[0].timeframes[target].previous },

        { id: 'playCurrent', dataTarget: data[1].timeframes[target].current },
        { id: 'playPrevious', dataTarget: data[1].timeframes[target].previous },

        { id: 'studyCurrent', dataTarget: data[2].timeframes[target].current },
        { id: 'studyPrevious', dataTarget: data[2].timeframes[target].previous },

        { id: 'exerciseCurrent', dataTarget: data[0].timeframes[target].current },
        { id: 'exercisePrevious', dataTarget: data[0].timeframes[target].previous },

        { id: 'socialCurrent', dataTarget: data[0].timeframes[target].current },
        { id: 'socialPrevious', dataTarget: data[0].timeframes[target].previous },

        { id: 'selfCareCurrent', dataTarget: data[0].timeframes[target].current },
        { id: 'selfCarePrevious', dataTarget: data[0].timeframes[target].previous },


    ]
    items.forEach(update => updateSpanText(update.id, update.dataTarget));


}

function updateSpanText(id: string, value: number) {
    const element = document.getElementById(id) as HTMLSpanElement | null;

    if (element) {
        element.innerText = value.toString();
    } else {
        console.error(`Element with ID ${id} not found.`);
    }
}