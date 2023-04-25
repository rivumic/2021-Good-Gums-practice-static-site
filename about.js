///<reference path="jquery-3.6.0.js" />

$(function () {
    createClickEvents;
});

function createClickEvents() {
    staff = $("#staffPicker");
    $(staff).each(function () {
        staff[i].addEventListener('click', function () {
                console.log(this.id);
                writeContent(this.id);
        });
    });
}

function writeContent(id) {
    switch (id) {
        case 'daisy':
            $('#staffInfo').textContent = "Daisy is the manager and found of Good Gums. Though it's more likely that she is seen in the office than around the nursery these days, her contribution to Good Gums immense. Daisy loves working on her home garden as well as playing tennis and board games on the weekends.";
            break;
        case 'ivy':
            $("#staffInfo").textContent = "Ivy is the assistant manager at Good Gums. Ivy is like the glue that holds everything together; with her background in managemenr and bookkeeping, she is a valuable member of the team. Ivy's pastimes include bridge and listening to music she loves.";
            break;
        case 'jarred':
            $('#staffInfo').textContent = "Jarred is one of Good Gums natives experts. With more than 10 years of garden/landscape design under his belt, Jarred is the perfect man to ask about what plants would best suit your garden. Jarred is an avid squash and tennis player.";
            break;
        case 'ren':
            $('#staffInfo').textContent = "Ren is a guru on all things green - or in the case of natives sometimes a little brown! A gardener of 20 years and with experience consulting on bushland restoration, Ren will be able to answer any questions you might have about taking care of your new natives. Ren enjoys camping and hiking.";
            break;
        default:
            $('#staffInfo').textContent = 'Click on the portraits above to learn more about each member of the organisation. The description will appear here and replace this text.';
    }
}