import os
import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

@pytest.fixture
def driver():
    driver = webdriver.Chrome()
    file_path = "file://" + os.path.abspath("/Users/julie/portfolio/html/portfolio.html")
    driver.get(file_path)
    yield driver
    driver.quit()

def test_navigation_bar_presence(driver):
    topnav = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.CLASS_NAME, "topnav"))
    )
    assert topnav is not None

def test_about_me_section_presence(driver):
    about_section = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "about"))
    )
    assert about_section is not None

def test_projects_section_presence(driver):
    projects_section = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "projects"))
    )
    assert projects_section is not None

def test_experience_section_presence(driver):
    experience_section = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "experience"))
    )
    assert experience_section is not None

def test_contact_me_section_presence(driver):
    contact_section = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "contact"))
    )
    assert contact_section is not None

def test_navigation_links(driver):
    current_url = driver.current_url

    # Visit the HTML file itself
    driver.get(current_url)

    home_link = driver.find_element(By.XPATH, '//a[text()="Home"]')
    home_link.click()
    assert "#home" in driver.current_url

    contact_link = driver.find_element(By.XPATH, '//a[text()="Contact"]')
    contact_link.click()
    assert "#contact" in driver.current_url

    experience_link = driver.find_element(By.XPATH, '//a[text()="Experience"]')
    experience_link.click()
    assert "#experience" in driver.current_url

    projects_link = driver.find_element(By.XPATH, '//a[text()="Projects"]')
    projects_link.click()
    assert "#projects" in driver.current_url

    about_link = driver.find_element(By.XPATH, '//a[text()="About Me"]')
    about_link.click()
    assert "#about" in driver.current_url


def test_profile_picture_presence(driver):
    def test_profile_picture_presence(driver):
        profile_picture = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.CSS_SELECTOR, "#home img"))
        )
        assert profile_picture is not None


def test_portfolio_button_functionality(driver):
    home_section = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "home"))
    )
    portfolio_button = home_section.find_element(By.CSS_SELECTOR, "button.button")
    portfolio_button.click()
    WebDriverWait(driver, 10).until(
        EC.visibility_of_element_located((By.ID, "about"))
    )
    assert "about" in driver.current_url


def test_project_carousel(driver):
    projects_section = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "projects"))
    )
    carousel = projects_section.find_element(By.CLASS_NAME, "carousel")
    assert carousel is not None