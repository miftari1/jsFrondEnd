function solve(arr) {
    // Read the input array and form guilds
    // Read the commands
    // If perform command
        // - If member is in the correct role and can perform task output success message
        // - If not output fail message
    // If reassign command then change role of member
    // If learn command
        // - If member has skill then output message that member has it
        // - Otherwise add skill to list and output message
        
        let members = {};
        let skills = {};

        let n = Number(arr.shift());

        for (let i=0; i < n; i++) {
            [name, role, currSkills] = arr.shift().split(' ');
            currSkills = currSkills.split(',');

            members[name] = role;
            skills[name] = currSkills;
        }

        let availableCommands = {
            'Perform': performSkill,
            'Reassign': changeRole,
            'Learn Skill': learnSkill
        }

        while (arr[0] != 'End') {
            let command = arr.shift();
            
            let tokens = command.split(' / ');

            commandName = tokens.shift();
            availableCommands[commandName](tokens);
        }

        function performSkill(args) {
            
            [memberName, memberRole, memberSkill] = args;

            if (members[memberName] === memberRole && skills[memberName].includes(memberSkill)) {
                console.log(`${memberName} has successfully performed the skill: ${memberSkill}!`);
            }
            else {
                console.log(`${memberName} cannot perform the skill: ${memberSkill}.`);
            }
        }
        

        function changeRole(args) {
            [memberName, newRole] = args;

            members[memberName] = newRole;
            console.log(`${memberName} has been reassigned to: ${newRole}`);
        }

        function learnSkill(args) {
            [memberName, newSkill] = args;

            if (skills[memberName].includes(newSkill)) {
                console.log(`${memberName} already knows the skill: ${newSkill}.`);
            }
            else {
                skills[memberName].push(newSkill);
                
                console.log(`${memberName} has learned a new skill: ${newSkill}.`);
            }
        }

        for (let name of Object.keys(members)) {
            let role = members[name];
            let asString = skills[name].toSorted((a, b) => a.localeCompare(b)).join(', ');

            console.log(`Guild Member: ${name}, Role: ${role}, Skills: ${asString}`)
        }

}

console.log(solve([ 
    "3", 
    "Arthur warrior swordsmanship,shield", 
    "Merlin mage fireball,teleport", 
    "Gwen healer healing,alchemy", 
    "Perform / Arthur / warrior / swordsmanship", 
    "Perform / Merlin / warrior / fireball", 
    "Learn Skill / Gwen / purification", 
    "Perform / Gwen / healer / purification", 
    "Reassign / Merlin / healer", 
    "Perform / Merlin / healer / teleport", 
    "End" 
]));