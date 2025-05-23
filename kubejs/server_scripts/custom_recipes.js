ServerEvents.recipes(event => {
    // Exemple : remplace une recette existante si besoin
    event.remove({ output: 'endrem:lost_eye' })

    // Ajoute une nouvelle recette
    event.custom({
        type: "ars_nouveau:enchanting_apparatus",
        keepNbtOfReagent: false,
        output: {
            item: "endrem:lost_eye"
        },
        pedestalItems: [
            { item: "knightsnmages:elite_source_gem"},
            { item: "knightsnmages:scarlet_gem" },
            { item: "knightsnmages:elite_source_gem" },
            { item: "ars_nouveau:fire_essence" },
            { item: "knightsnmages:elite_source_gem" },
            { item: "knightsnmages:scarlet_gem" },
            { item: "knightsnmages:elite_source_gem" },
            { item: "ars_nouveau:fire_essence" },
        ],
        reagent:[ 
            {
                item: "minecraft:ender_eye"
            }
        ],
        sourceCost: 0 // facultatif, dépend de ta logique de progression
    })
    event.remove({ output: 'endrem:black_eye' })

    // Ajoute une nouvelle recette
    event.custom({
        type: "ars_nouveau:enchanting_apparatus",
        keepNbtOfReagent: false,
        output: {
            item: "endrem:black_eye"
        },
        pedestalItems: [
            { item: "cataclysm:black_steel_ingot"},
            { item: "deeperdarker:soul_crystal" },
            { item: "cataclysm:black_steel_ingot" },
            { item: "deeperdarker:soul_crystal" },
            { item: "cataclysm:black_steel_ingot" },
            { item: "deeperdarker:soul_crystal" },
            { item: "cataclysm:black_steel_ingot" },
            { item: "deeperdarker:soul_crystal" },
        ],
        reagent:[ 
            {
                item: "minecraft:ender_eye"
            }
        ],
        sourceCost: 0 // facultatif, dépend de ta logique de progression
    })
    event.remove({ output: 'endrem:cold_eye' })

    // Ajoute une nouvelle recette
    event.custom({
        type: "ars_nouveau:enchanting_apparatus",
        keepNbtOfReagent: false,
        output: {
            item: "endrem:cold_eye"
        },
        pedestalItems: [
            { item: "irons_spellbooks:arcane_salvage"},
            { item: "irons_spellbooks:ice_upgrade_orb" },
            { item: "irons_spellbooks:arcane_ingot" },
            { item: "iceandfire:summoning_crystal_ice" },
            { item: "irons_spellbooks:arcane_salvage" },
            { item: "iceandfire:ice_dragon_blood" },
            { item: "irons_spellbooks:arcane_ingot" },
            { item: "iceandfire:summoning_crystal_ice" },
        ],
        reagent:[ 
            {
                item: "minecraft:ender_eye"
            }
        ],
        sourceCost: 0 // facultatif, dépend de ta logique de progression
    })
    event.remove({ output: 'endrem:corrupted_eye' })

    // Ajoute une nouvelle recette
    event.custom({
        type: "ars_nouveau:enchanting_apparatus",
        keepNbtOfReagent: false,
        output: {
            item: "endrem:corrupted_eye"
        },
        pedestalItems: [
            { item: "forbidden_arcanus:corrupti_dust"},
            { item: "forbidden_arcanus:corrupt_soul" },
            { item: "forbidden_arcanus:corrupti_dust" },
            { item: "iceandfire:dragonscales_gray" },
            { item: "forbidden_arcanus:corrupti_dust" },
            { item: "forbidden_arcanus:corrupt_soul" },
            { item: "forbidden_arcanus:corrupti_dust" },
            { item: "iceandfire:dragonscales_gray" },
        ],
        reagent:[ 
            {
                item: "minecraft:ender_eye"
            }
        ],
        sourceCost: 0 // facultatif, dépend de ta logique de progression
    })
    event.remove({ output: 'endrem:nether_eye' })

    // Ajoute une nouvelle recette
     event.custom({
        type: "ars_nouveau:enchanting_apparatus",
        keepNbtOfReagent: false,
        output: {
            item: "endrem:nether_eye"
        },
        pedestalItems: [
            { item: "minecraft:netherite_ingot"},
            { item: "cataclysm:ignitium_ingot" },
            { item: "minecraft:netherite_ingot" },
            { item: "cataclysm:burning_ashes" },
            { item: "minecraft:netherite_ingot" },
            { item: "cataclysm:ignitium_ingot" },
            { item: "minecraft:netherite_ingot" },
            { item: "cataclysm:burning_ashes" },
        ],
        reagent:[ 
            {
                item: "minecraft:ender_eye"
            }
        ],
        sourceCost: 0 // facultatif, dépend de ta logique de progression
    })
    event.remove({ output: 'endrem:old_eye' })

    // Ajoute une nouvelle recette
     event.custom({
        type: "ars_nouveau:enchanting_apparatus",
        keepNbtOfReagent: false,
        output: {
            item: "endrem:old_eye"
        },
        pedestalItems: [
            { item: "create_new_age:overcharged_gold"},
            { item: "advancednetherite:netherite_gold_ingot" },
            { item: "create_new_age:overcharged_gold" },
            { item: "the_bumblezone:bee_stinger" },
            { item: "create_new_age:overcharged_gold" },
            { item: "advancednetherite:netherite_gold_ingot" },
            { item: "create_new_age:overcharged_gold" },
            { item: "the_bumblezone:bee_stinger" },
        ],
        reagent:[ 
            {
                item: "minecraft:ender_eye"
            }
        ],
        sourceCost: 0 // facultatif, dépend de ta logique de progression
    })
    event.remove({ output: 'endrem:rogue_eye' })

    // Ajoute une nouvelle recette
    event.custom({
        type: "ars_nouveau:enchanting_apparatus",
        keepNbtOfReagent: false,
        output: {
            item: "endrem:rogue_eye"
        },
        pedestalItems: [
            { item: "twilightforest:naga_scale"},
            { item: "advancednetherite:netherite_emerald_ingot" },
            { item: "twilightforest:naga_scale" },
            { item: "iceandfire:sea_serpent_scales_green" },
            { item: "twilightforest:naga_scale" },
            { item: "minecraft:slime_ball" },
            { item: "twilightforest:naga_scale" },
            { item: "iceandfire:sea_serpent_scales_green" },
        ],
        reagent:[ 
            {
                item: "minecraft:ender_eye"
            }
        ],
        sourceCost: 0 // facultatif, dépend de ta logique de progression
    })
     event.remove({ output: 'endrem:cursed_eye' })

    // Ajoute une nouvelle recette
    event.custom({
        type: "ars_nouveau:enchanting_apparatus",
        keepNbtOfReagent: false,
        output: {
            item: "endrem:cursed_eye"
        },
        pedestalItems: [
            { item: "forbidden_arcanus:dark_matter"},
            { item: "forbidden_arcanus:obsidian_ingot" },
            { item: "forbidden_arcanus:dark_matter" },
            { item: "forbidden_arcanus:obsidian_ingot" },
            { item: "forbidden_arcanus:mundabitur_dust" },
            { item: "forbidden_arcanus:obsidian_ingot" },
            { item: "forbidden_arcanus:mundabitur_dust" },
            { item: "forbidden_arcanus:obsidian_ingot" },
        ],
        reagent:[ 
            {
                item: "minecraft:ender_eye"
            }
        ],
        sourceCost: 0 // facultatif, dépend de ta logique de progression
    })
    event.remove({ output: 'endrem:magical_eye' })

    // Ajoute une nouvelle recette
    event.custom({
        type: "ars_nouveau:enchanting_apparatus",
        keepNbtOfReagent: false,
        output: {
            item: "endrem:magical_eye"
        },
        pedestalItems: [
            { item: "aether_redux:veridium_nugget"},
            { item: "deep_aether:stratus_ingot" },
            { item: "aether_redux:veridium_nugget" },
            { item: "deep_aether:stratus_ingot" },
            { item: "aether_redux:veridium_nugget" },
            { item: "deep_aether:stratus_ingot" },
            { item: "aether_redux:veridium_nugget" },
            { item: "deep_aether:stratus_ingot" },
        ],
        reagent:[ 
            {
                item: "minecraft:ender_eye"
            }
        ],
        sourceCost: 0 // facultatif, dépend de ta logique de progression
    })
    event.remove({ output: 'endrem:evil_eye' })

    // Ajoute une nouvelle recette
    event.custom({
        type: "ars_nouveau:enchanting_apparatus",
        keepNbtOfReagent: false,
        output: {
            item: "endrem:evil_eye"
        },
        pedestalItems: [
            { item: "minecraft:gold_nugget"},
            { item: "blue_skies:falsite_ingot" },
            { item: "minecraft:gold_nugget" },
            { item: "blue_skies:star_flare" },
            { item: "minecraft:gold_nugget" },
            { item: "blue_skies:horizonite_ingot" },
            { item: "minecraft:gold_nugget" },
            { item: "blue_skies:pyrope_gem" },
        ],
        reagent:[ 
            {
                item: "minecraft:ender_eye"
            }
        ],
        sourceCost: 0 // facultatif, dépend de ta logique de progression
    })
    event.remove({ output: 'origins:orb_of_origin' })

    // Ajoute une nouvelle recette
    event.shaped('origins:orb_of_origin', [
        'CAC',
        'ABA',
        'CAC'
    ], {
        A: 'forbidden_arcanus:dark_nether_star',
        B: 'minecraft:ender_pearl',
        C: ''
    })
    event.remove({ output: 'structurecompass:structure_compass' })

    // Ajoute une nouvelle recette
    event.shaped('structurecompass:structure_compass', [
        'FAF',
        'BEC',
        'FDF'
    ], {
        A: 'the_bumblezone:honey_compass',
        B: 'naturescompass:naturescompass',
        C: 'minecraft:recovery_compass',
        D: 'irons_spellbooks:wayward_compass',
        E: 'minecraft:compass',
        F: ''
    })
})
