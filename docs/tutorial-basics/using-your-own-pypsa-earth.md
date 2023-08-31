---
sidebar_position: 4
---

# Using Your Own PyPSA-Earth

If you are new to **PyPSA-Earth**, it is recommended to follow the [tutorial](https://PyPSA-earth.readthedocs.io/en/latest/short_tutorial.html) before proceeding with the steps outlined below. Familiarity with **PyPSA-Earth** will enhance your understanding of the following instructions.

In contrast to the `solve_all_networks` command that uses the default configuration present in the **PyPSA-Earth** root directory, we will be employing a different command: `snakemake -j1 run_all_scenarios`. This command leverages multiple configurations located in `PyPSA-earth/configs/scenarios`.

Custom Configurations for Scenarios

![Custom Configurations for Scenarios](/img/scenario_configs.png)

For each scenario, you have the flexibility to define a unique configuration file in the form `config.scenario_name.yaml`. These custom configurations allow you to tailor the parameters and settings specific to each scenario, optimizing the analysis for your project's requirements.

Executing the command `snakemake -j1 run_all_scenarios` triggers **PyPSA-Earth** to process the defined scenarios using their respective configurations. The output is a collection of folders inside the `results` directory, each corresponding to a scenario. These folders contain essential data and results produced by **PyPSA-Earth**.

![Results Directory](/img/scenario_results.png)

The generated folders within the `results` directory, along with other relevant data from **PyPSA-Earth**, serve as the foundation for the **PyPSA-Earth-Lit** application. **PyPSA-Earth-Lit** seamlessly integrates this data, enabling you to visualize, analyze, and interact with scenario-specific insights through informative plots and visualizations.

Refer to the attached images and the solved **PyPSA-Earth** project in this repository for a clearer understanding of the structure and output.
