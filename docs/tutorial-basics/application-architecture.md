---
sidebar_position: 3
---

# Application Architecture

![Application Architecture](/img/PyPSA_lit_structure.png)

In the root directory of this project, you will find the following essential files:

## `env.yaml`

The `env.yaml` file contains a list of project dependencies that are used to create a Conda environment. You can use this file to ensure that you have all the necessary dependencies installed for smooth execution of the project.

## `Makefile`

The `Makefile` is a convenient resource that is particularly related to testing and setup. Using the commands defined in the Makefile, you can streamline your testing processes and set up the project environment efficiently.

## `setup.py`

The `setup.py` file is crucial for making Python module imports possible internally within the project. It helps organize your codebase into manageable modules, making it easier to maintain and develop.

By utilizing `setup.py`, you ensure that your project's modules are accessible and structured correctly.

## app

The `app` directory houses the core components of the multipage Streamlit application. The following elements contribute to the structure and functionality of the application:

`index.py`

The `index.py` file serves as the entry point of the [Streamlit multipage application](https://docs.streamlit.io/library/get-started/multipage-apps).

## `app/pages`

Inside the `pages` folder, you will find a collection of files that correspond to individual pages of the [Streamlit multipage application.](https://docs.streamlit.io/library/get-started/multipage-apps) Each file represents a distinct section or functionality of the application.

## `app/pages/utils`

### `__pre_run.py`

In the context of this project, each file within the `pages` folder has a corresponding `pre_run` file.

The `pre_run` files serve as preparatory scripts that are executed prior to the main execution of each page in the Streamlit multipage application. Their primary objectives include:

1. **Data Modification and Processing:** After extraction, the data is subjected to various processing steps, where it is modified, cleaned, and structured in a way that is conducive to effective visualization.

2. **Caching:** One of the key optimizations introduced by the `pre_run` files is caching. Processed data is cached, allowing subsequent runs of the application to reuse the precomputed data. This caching mechanism significantly enhances performance, as it eliminates the need to repeatedly process the same data.

### `tools.py`

The `tools.py` file is a fundamental component of this project, serving as a data extraction and organization tool. Its primary function is to extract data from the **PyPSA-earth** networks and create a dictionary structure that associates scenario names with their respective **PyPSA** networks.

The `tools.py` script is designed to streamline the process of working with different scenarios within the **PyPSA-earth** framework.

### `config.yaml`

The `config.yaml` file encompasses the following important configurations:

1. **Color Schemes:** `config.yaml` defines color schemes that are utilized throughout the application's visual elements. These color schemes contribute to a consistent and visually appealing design, making it easier for users to interpret and engage with the content.

2. **User-Friendly Names:** One of the significant features of `config.yaml` is the inclusion of user-friendly names for scenarios and other internal data elements. These meaningful names enhance user interaction and understanding, allowing users to easily identify and select different options.

3. **Units for Plots:** The `config.yaml` file also specifies units that are associated with various parameters used in plots and visualizations. These units not only aid users in comprehending the displayed information but also provide a clear reference to the original data in the **PyPSA-earth** networks.

4. **Parameter Tracking:** By defining units and providing comprehensive information, `config.yaml` aids in tracking which parameters are being utilized from the **PyPSA-earth** networks.
