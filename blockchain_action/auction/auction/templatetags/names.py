from django import template
from ..vars import SITE_VARIABLES

register = template.Library()

@register.simple_tag
def site_var(string):
    return SITE_VARIABLES.get(string, f'{{{{ {string} }}}}')

@register.simple_tag
def nav_name(string):
    return site_var(string)
