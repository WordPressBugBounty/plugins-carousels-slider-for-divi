<?php

trait Divi8_Icon_Renderer {

    private function renderNavIcon($prop, $class) {

        if (empty($this->props[$prop])) {
            return '';
        }

        $icon = et_pb_process_font_icon($this->props[$prop]);

        return sprintf(
            '<i class="et-pb-icon %s">%s</i>',
            esc_attr($class),
            html_entity_decode($icon, ENT_QUOTES | ENT_HTML5, 'UTF-8')
        );
    }

    public function leftIconShow() {
        return $this->renderNavIcon('divi8_left_icon', 'divi8-icon-left');
    }

    public function rightIconShow() {
        return $this->renderNavIcon('divi8_right_icon', 'divi8-icon-right');
    }
}