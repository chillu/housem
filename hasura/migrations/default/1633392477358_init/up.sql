SET check_function_bodies = false;
CREATE TABLE public.activities (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    template_id uuid NOT NULL,
    user_id text NOT NULL
);
CREATE TABLE public.areas (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    title text NOT NULL
);
CREATE TABLE public.templates (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    title text NOT NULL,
    area_id uuid NOT NULL
);
CREATE TABLE public.users (
    id text NOT NULL,
    name text NOT NULL
);
ALTER TABLE ONLY public.templates
    ADD CONSTRAINT activity_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.areas
    ADD CONSTRAINT area_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.activities
    ADD CONSTRAINT my_activities_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.templates
    ADD CONSTRAINT activity_area_id_fkey FOREIGN KEY (area_id) REFERENCES public.areas(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.activities
    ADD CONSTRAINT my_activities_activity_id_fkey FOREIGN KEY (template_id) REFERENCES public.templates(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.activities
    ADD CONSTRAINT my_activities_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
